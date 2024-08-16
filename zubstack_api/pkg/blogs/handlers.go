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

func (h *Handlers) Create(w http.ResponseWriter, r *http.Request) {
	var blog CreateBlogDTO

	err := json.NewDecoder(r.Body).Decode(&blog)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	id, err := h.serv.Create(blog)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	body, err := json.Marshal(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write(body)
}

func (h *Handlers) AddVote(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")

	data, err := h.serv.AddVote(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	body, err := json.Marshal(data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(body)
}
