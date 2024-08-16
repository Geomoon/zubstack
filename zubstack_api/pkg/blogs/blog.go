package blogs

import "time"

type Blog struct {
	CreatedAt time.Time `gorm:"column:created_at;default:now()"`
	ID        string    `gorm:"primary_key;column:blog_id;default:gen_random_uuid()"`
	Title     string    `gorm:"column:blog_title"`
	Content   string    `gorm:"column:blog_content"`
	Author    string    `gorm:"column:blog_author"`
	Tags      string    `gorm:"column:blog_tags"`
	Votes     int32     `gorm:"column:blog_votes"`
}

func (Blog) TableName() string {
	return "blogs"
}
