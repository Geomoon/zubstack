package main

import (
	"zubstack_api/pkg/config"
)

func main() {
	server := config.NewServer(":3010")
	server.Run()
}
