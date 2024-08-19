package config

import (
	"fmt"
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
	db := NewDB("localhost", "postgres", "postgres", "zubstack_db", 5433)
	db.Init()

	repo := blogs.NewPGRepository(db.db)
	serv := blogs.NewService(repo, blogs.NewMapper())
	handler := blogs.NewHandlers(&serv)
	blogs.Routes(handler, router)

	server := &http.Server{Addr: s.port, Handler: corsMiddleware(router)}

	fmt.Printf("server running at :%s\n", s.port)
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println(err.Error())
	}
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}
