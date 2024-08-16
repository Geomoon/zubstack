package blogs

type Mapper struct{}

func NewMapper() Mapper {
	return Mapper{}
}

func (*Mapper) toDTO(blog Blog) GetBlogDTO {
	return GetBlogDTO{
		ID:        blog.ID,
		Title:     blog.Tags,
		Content:   blog.Content,
		Author:    blog.Author,
		Votes:     blog.Votes,
		Tags:      blog.Tags,
		CreatedAt: blog.CreatedAt,
	}
}

func (*Mapper) toEntity(blog CreateBlogDTO) Blog {
	return Blog{
		Title:   blog.Title,
		Content: blog.Content,
		Author:  blog.Author,
		Tags:    blog.Tags,
	}
}
