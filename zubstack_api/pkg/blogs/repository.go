package blogs

import "zubstack_api/pkg/shared"

type Repository interface {
	GetAll() ([]Blog, error)
	Create(blog Blog) (shared.IdDTO, error)
	Update(id string, blog Blog) (shared.IdDTO, error)
}

func NewRepository() Repository {
	return PGRepository{}
}

type PGRepository struct{}

func (PGRepository) Create(blog Blog) (shared.IdDTO, error) {
	panic("unimplemented")
}

func (PGRepository) GetAll() ([]Blog, error) {
	panic("unimplemented")
}

func (PGRepository) Update(id string, blog Blog) (shared.IdDTO, error) {
	panic("unimplemented")
}
