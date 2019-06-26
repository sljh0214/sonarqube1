CREATE TABLE "LIVE_MEASURES" (
  "UUID" VARCHAR(40) NOT NULL PRIMARY KEY,
  "PROJECT_UUID" VARCHAR(50) NOT NULL,
  "COMPONENT_UUID" VARCHAR(50) NOT NULL,
  "METRIC_ID" INTEGER NOT NULL,
  "VALUE" DOUBLE,
  "TEXT_VALUE" VARCHAR(4000),
  "VARIATION" DOUBLE,
  "MEASURE_DATA" BINARY,
  "UPDATE_MARKER" VARCHAR(40),
  "CREATED_AT" BIGINT NOT NULL,
  "UPDATED_AT" BIGINT NOT NULL
);
CREATE INDEX "LIVE_MEASURES_PROJECT" ON "LIVE_MEASURES" ("PROJECT_UUID");
