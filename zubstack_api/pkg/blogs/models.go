package blogs

import "time"

type GetBlogDTO struct {
	CreatedAt time.Time `json:"createdAt"`
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	Author    string    `json:"author"`
	Tags      string    `json:"tags"`
	Votes     int32     `json:"votes"`
}
