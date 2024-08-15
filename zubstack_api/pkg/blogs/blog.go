package blogs

import "time"

type Blog struct {
	CreatedAt *time.Time

	ID      string
	Title   string
	Content string
	Author  string
	Tags    string
	Votes   int32
}
