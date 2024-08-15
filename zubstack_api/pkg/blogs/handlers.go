package blogs

import (
	"encoding/json"
	"net/http"
)

type Handlers struct {
	serv *Service
}

func NewHandlers(serv *Service) *Handlers {
	return &Handlers{
		serv: serv,
	}
}

func (h *Handlers) GetAll(w http.ResponseWriter, r *http.Request) {
	blogs, err := h.serv.GetAll()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	body, err := json.Marshal(blogs)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(body)
}
