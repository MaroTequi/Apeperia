package com.apeperia.model;

import java.util.List;

public record Plano(
        Long id,
        String nome,
        String preco,
        List<String> features,
        String cor
) {}
