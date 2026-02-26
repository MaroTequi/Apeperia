package com.apeperia.model;

public record ContatoRequest(
        String nome,
        String email,
        String mensagem
) {}
