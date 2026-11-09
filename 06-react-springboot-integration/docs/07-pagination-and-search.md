# Server-side Pagination and Search

For large datasets, the backend should own pagination and filtering.

## Example request

```http
GET /api/customers?page=0&size=8&search=sample
```

Page indexes are zero-based in the sample.

## Example response

```json
{
  "content": [],
  "page": 0,
  "size": 8,
  "totalElements": 0,
  "totalPages": 0
}
```

The frontend should use the returned page metadata rather than estimating the number of pages from the current result list.

## Production considerations

- Set a maximum page size.
- Whitelist sortable fields and sort directions.
- Index columns used in search.
- Debounce free-text search.
- Reset to page zero when search criteria change.
- Consider cursor pagination for high-volume or frequently changing datasets.
