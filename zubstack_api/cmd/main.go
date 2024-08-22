package main

import (
	"log"
	"zubstack_api/pkg/config"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env")
	}

	server := config.NewServer(":3010")
	server.Run()
}
