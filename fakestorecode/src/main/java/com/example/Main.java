package com.example;

import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.Unirest;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.options;
import static spark.Spark.staticFiles;

//TESTESTESTE
//teste parte dois
//parte tres mothefuckl
//comite 4
public class Main {
    public static void main(String[] args) {
        // Serve arquivos estáticos da pasta resources/public/
        staticFiles.location("/public");

        // Habilita CORS
        options("/*", (request, response) -> {
            String headers = request.headers("Access-Control-Request-Headers");
            if (headers != null) {
                response.header("Access-Control-Allow-Headers", headers);
            }

            String methods = request.headers("Access-Control-Request-Method");
            if (methods != null) {
                response.header("Access-Control-Allow-Methods", methods);
            }

            return "OK";
        });

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            response.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        });

        // Rota para buscar produtos da Fake Store API
        get("/products", (req, res) -> {
            try {
                HttpResponse<JsonNode> response = Unirest.get("https://fakestoreapi.com/products")
                        .asJson();
                res.type("application/json");
                return response.getBody().getArray().toString(); // retorna o JSON como texto
            } catch (Exception e) {
                res.status(500);
                res.type("application/json");
                return "{\"error\":\"Erro ao acessar a API\"}";
            }
        });
    }
}
