package blogs

import (
	"fmt"
	"net/http"
)

func Routes(h *Handlers, r *http.ServeMux) {
	fmt.Println("[ROUTES]: /api/blogs")
	r.HandleFunc("GET /api/blogs", h.GetAll)
}
