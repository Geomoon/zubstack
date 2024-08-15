package config

import (
	"net/http"
	"zubstack_api/pkg/blogs"
)

type Server struct {
	port string
}

func NewServer(port string) *Server {
	return &Server{
		port: port,
	}
}

func (s *Server) Run() {
	router := http.NewServeMux()

	repo := blogs.NewRepository()
	serv := blogs.NewService(repo, blogs.NewMapper())
	handler := blogs.NewHandlers(&serv)
	blogs.Routes(handler, router)
}
