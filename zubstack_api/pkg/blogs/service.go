package blogs

import (
	"errors"
	"fmt"
	"time"
	"zubstack_api/pkg/shared"

	"gorm.io/gorm"
)

type Service struct {
	mapper Mapper
	repo   Repository
}

func NewService(repo Repository, mapper Mapper) Service {
	return Service{
		repo:   repo,
		mapper: mapper,
	}
}

func (serv *Service) GetAll() ([]GetBlogDTO, error) {
	blogs, err := serv.repo.GetAll()
	if err != nil {
		return []GetBlogDTO{}, errors.New("cannot get blogs")
	}

	list := make([]GetBlogDTO, len(blogs))
	for i, v := range blogs {
		list[i] = serv.mapper.toDTO(v)
	}
	return list, nil
}

func (serv *Service) Create(blog CreateBlogDTO) (shared.IdDTO, error) {
	entity := serv.mapper.toEntity(blog)
	entity.CreatedAt = time.Now()
	saved, err := serv.repo.Create(entity)
	if err != nil {
		return shared.IdDTO{}, fmt.Errorf("error at save blog: %s", err.Error())
	}

	return saved, nil
}

func (serv *Service) AddVote(id string) (VotesDTO, error) {
	blog, err := serv.repo.GetById(id)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return VotesDTO{}, errors.New("blog not found")
		}
		return VotesDTO{}, errors.New("error at search votes")
	}

	blog.Votes += 1

	_, err = serv.repo.Update(id, blog)
	if err != nil {
		return VotesDTO{}, errors.New("error at update votes")
	}

	return VotesDTO{
		Votes: blog.Votes,
	}, nil
}
