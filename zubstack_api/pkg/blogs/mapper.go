package blogs

type Mapper struct{}

func NewMapper() Mapper {
	return Mapper{}
}

func (*Mapper) toDTO(blog Blog) GetBlogDTO {
	return GetBlogDTO(blog)
}

func (*Mapper) toEntity(blog CreateBlogDTO) Blog {
	return Blog{
		Title:   blog.Title,
		Content: blog.Content,
		Author:  blog.Author,
		Tags:    blog.Tags,
	}
}
