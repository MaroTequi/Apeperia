package com.apeperia.controller;

import com.apeperia.model.Plano;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/planos")
public class PlanosController {

    private final List<Plano> planos = List.of(
            new Plano(1L, "Start", "R$ 500", List.of(
                    "5 manutenções mensais",
                    "App SEO",
                    "1 sistema operacional"
            ), "#56CCF2"),
            new Plano(2L, "Mega", "R$ 1000", List.of(
                    "10 manutenções mensais",
                    "App SEO",
                    "2 sistemas operacionais"
            ), "#B04CD9"),
            new Plano(3L, "Ultra", "R$ 1500", List.of(
                    "20 manutenções mensais",
                    "App SEO",
                    "4 sistemas operacionais",
                    "24h de atendimento"
            ), "#E33B3B")
    );

    @GetMapping
    public List<Plano> listarPlanos() {
        return planos;
    }
}
