package blogs

import (
	"errors"
	"fmt"
	"zubstack_api/pkg/shared"
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
	saved, err := serv.repo.Create(entity)
	if err != nil {
		return shared.IdDTO{}, fmt.Errorf("error at save blog: %s\n", err.Error())
	}

	return saved, nil
}
