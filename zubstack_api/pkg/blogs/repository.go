package blogs

import (
	"fmt"
	"zubstack_api/pkg/shared"

	"gorm.io/gorm"
)

type Repository interface {
	GetAll() ([]Blog, error)
	GetById(id string) (Blog, error)
	Create(blog Blog) (shared.IdDTO, error)
	Update(id string, blog Blog) (shared.IdDTO, error)
	Delete(id string) error
}

func NewPGRepository(db *gorm.DB) Repository {
	return &PGRepository{
		db: db,
	}
}

type PGRepository struct {
	db *gorm.DB
}

func (repo *PGRepository) Delete(id string) error {
	return repo.db.Delete(&Blog{ID: id}).Error
}

func (repo *PGRepository) Create(blog Blog) (shared.IdDTO, error) {
	err := repo.db.Save(&blog).Error
	if err != nil {
		return shared.IdDTO{}, err
	}

	return shared.IdDTO{}, nil
}

func (repo *PGRepository) GetAll() ([]Blog, error) {
	var blogs []Blog

	err := repo.db.Table("blogs").Order("created_at DESC").Find(&blogs).Error
	if err != nil {
		return []Blog{}, err
	}
	return blogs, nil
}

func (repo *PGRepository) Update(id string, blog Blog) (shared.IdDTO, error) {
	blog.ID = id
	repo.db.Save(&blog)
	return shared.IdDTO{ID: id}, nil
}

func (repo *PGRepository) GetById(id string) (Blog, error) {
	var blog Blog

	err := repo.db.First(&blog, Blog{ID: id}).Error
	if err != nil {
		return Blog{}, fmt.Errorf("error at GetById: %s", err.Error())
	}

	return blog, nil
}
