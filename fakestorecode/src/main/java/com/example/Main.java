package com.example;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import spark.Request;
import spark.Response;
import spark.Spark;

import static spark.Spark.staticFiles;
import static spark.Spark.options;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.path;

public class Main {
    public static void main(String[] args) {
        // 1) Serve arquivos estáticos de src/main/resources/public
        staticFiles.location("/public");

        // 2) Habilita CORS para todas as rotas
        options("/*", (Request req, Response res) -> {
            String headers = req.headers("Access-Control-Request-Headers");
            if (headers != null) {
                res.header("Access-Control-Allow-Headers", headers);
            }
            String methods = req.headers("Access-Control-Request-Method");
            if (methods != null) {
                res.header("Access-Control-Allow-Methods", methods);
            }
            return "OK";
        });

        before((Request req, Response res) -> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        });

        // 3) Redireciona / para index.html
        get("/", (Request req, Response res) -> {
            res.redirect("/index.html");
            return null;
        });

        // 4) Rotas de API em /api
        path("/api", () -> {
            // Health check da API
            get("/", (Request req, Response res) -> {
                res.type("text/plain");
                return "API Fake Store está no ar!";
            });

            // Rota para buscar produtos
            get("/products", (Request req, Response res) -> {
                try {
                    HttpResponse<JsonNode> response = Unirest
                        .get("https://fakestoreapi.com/products")
                        .asJson();
                    res.type("application/json");
                    return response.getBody().getArray().toString();
                } catch (Exception e) {
                    res.status(500);
                    res.type("application/json");
                    return "{\"error\":\"Erro ao acessar a API\"}";
                }
            });
        });

        // 5) Inicializa Spark e aguarda
        Spark.init();
        Spark.awaitInitialization();
        System.out.println("Servidor iniciado e pronto para receber requisições na porta " + Spark.port());
    }
}
