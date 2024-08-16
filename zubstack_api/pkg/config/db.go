package config

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DB struct {
	db       *gorm.DB
	host     string
	user     string
	password string
	database string
	port     int
}

func NewDB(host, user, password, database string, port int) *DB {
	return &DB{
		host:     host,
		user:     user,
		password: password,
		database: database,
		port:     port,
	}
}

func (d *DB) Init() {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable", d.host, d.user, d.password, d.database, d.port)

	logger := initLogger()
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger,
	})
	if err != nil {
		panic(fmt.Sprintf("error database %s\n", err.Error()))
	}

	d.db = db

	fmt.Println("[DATABASE] ready!")
}

func initLogger() logger.Interface {
	return logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second, // Slow SQL threshold
			LogLevel:                  logger.Info, // Log level
			IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound error for logger
			Colorful:                  true,        // Disable color
		},
	)
}
