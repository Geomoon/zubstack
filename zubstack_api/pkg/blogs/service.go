package blogs

import "errors"

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
	for _, v := range blogs {
		list = append(list, serv.mapper.toDTO(v))
	}
	return list, nil
}
