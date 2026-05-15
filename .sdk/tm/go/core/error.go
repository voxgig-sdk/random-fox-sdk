package core

type RandomFoxError struct {
	IsRandomFoxError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRandomFoxError(code string, msg string, ctx *Context) *RandomFoxError {
	return &RandomFoxError{
		IsRandomFoxError: true,
		Sdk:              "RandomFox",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RandomFoxError) Error() string {
	return e.Msg
}
