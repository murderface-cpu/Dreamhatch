async def test_list_projects_returns_all_four(client):
    response = await client.get("/api/v1/projects")
    assert response.status_code == 200
    body = response.json()
    assert len(body) == 4
    slugs = {p["slug"] for p in body}
    assert slugs == {
        "mazingira-community-drive",
        "sustainability-climate-smart-farming",
        "reforestation",
        "arts-based-awareness",
    }


async def test_get_project_by_slug(client):
    response = await client.get("/api/v1/projects/reforestation")
    assert response.status_code == 200
    body = response.json()
    assert body["slug"] == "reforestation"
    assert body["title"] == "Reforestation Projects"
    assert len(body["sections"]) >= 3
    assert len(body["gallery"]) >= 1


async def test_get_project_unknown_slug_returns_404(client):
    response = await client.get("/api/v1/projects/does-not-exist")
    assert response.status_code == 404
    assert "not found" in response.json()["detail"].lower()
