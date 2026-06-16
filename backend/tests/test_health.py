async def test_health_returns_ok(client):
    response = await client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


async def test_openapi_schema_is_exposed(client):
    response = await client.get("/api/openapi.json")
    assert response.status_code == 200
    assert response.json()["info"]["title"] == "Dream Hatch Kenya API"
