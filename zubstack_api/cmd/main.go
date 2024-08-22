package main

import (
	"fmt"
	"zubstack_api/pkg/config"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("error loading .env")
	}

	server := config.NewServer(":3010")
	server.Run()
}
