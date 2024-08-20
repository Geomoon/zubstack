package blogs

import (
	"fmt"
	"net/http"
)

func Routes(h *Handlers, r *http.ServeMux) {
	fmt.Println("[ROUTES]: /api/blogs")

	r.HandleFunc("GET /api/blogs", h.GetAll)
	r.HandleFunc("POST /api/blogs", h.Create)
	r.HandleFunc("PATCH /api/blogs/{id}/votes", h.AddVote)
	r.HandleFunc("PATCH /api/blogs/{id}", h.AddVote)
	r.HandleFunc("DELETE /api/blogs/{id}", h.Delete)
}
