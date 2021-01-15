@app
begin-app

@http
get /

@static
fingerprint true
folder public


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
