MODELOS DE LA BASE DE DATOS

| User                 | TYPE OF DATA | ASSOCIATE TO    | TYPE OF ASSOCIATE |
|----------------------|--------------|-----------------|-------------------|
| Name                 | STRING       |                 |                   |
| lastname             | STRING       |                 |                   |
| email                | STRING       |                 |                   |
| password             | VARCHAR      |                 |                   |
| birthdate            | DATE         |                 |                   |
| user_active          | BOOLEAN      |                 |                   |
| knowns_ips           | ARRAY        |                 |                   |
| last_connection      | DATE         |                 |                   |
| legal_guardians      |              | legal_guardians | hasMany           |
| main_legal_guardians | VARCHAR      |                 |                   |
| photo                | VARCHAR      |                 |                   |
| user_perms           |              | user_perms      | hasMany           |
| user_history         | ARRAY        |                 |                   |
| address              | TEXT         |                 |                   |


| legal_guardians | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|-----------------|--------------|--------------|-------------------|
| Name            | STRING       |              |                   |
| lastname        | STRING       |              |                   |
| email           | STRING       |              |                   |
| phone           | STRING       |              |                   |
| Address         | TEXT         |              |                   |
| DNI             | STRING       |              |                   |
| user            |              | user         | hasMany           |


| team     | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|----------|--------------|--------------|-------------------|
| Name     | STRING       |              |                   |
| Club     |              | club         | HasOne            |
| Category |              | category     | HasOne            |
| photo    | STRING       |              |                   |


| player   | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|----------|--------------|--------------|-------------------|
| user     |              | user         | HasOne            |
| template |              | template     | HasMany           |


| staff         | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|---------------|--------------|--------------|-------------------|
| user          |              | user         | HasOne            |
| template      |              | template     | HasMany           |
| type_of_staff |              | staff_types  | HasOne            |
| max_category  |              | category     | HasOne            |

| staff_types | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|-------------|--------------|--------------|-------------------|
| name        | STRING(2)    |              |                   |

| referee        | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|----------------|--------------|--------------|-------------------|
| user           |              | user         | hasOne            |
| main_referee   | BOOLEAN      |              |                   |
| aux_refereee   | BOOLEAN      |              |                   |
| scorekeeping   | BOOLEAN      |              |                   |
| timekeeper     | BOOLEAN      |              |                   |
| 24sec_operator | BOOLEAN      |              |                   |


| leagues       | TYPE OF DATA | ASSOCIATE TO  | TYPE OF ASSOCIATE |
|---------------|--------------|---------------|-------------------|
| team_template |              | team_template | hasMany           |
| name          | STRING       |               |                   |
| season        |              | season        | hasOne            |


| team_template | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|---------------|--------------|--------------|-------------------|
| users         |              | user         | HasMany           |
| team          |              | team         | HasOne            |
| season        |              | season       | HasOne            |
| leagues       |              | league       | HasOne            |


| game         | TYPE OF DATA | ASSOCIATE TO | TYPE OF ASSOCIATE |
|--------------|--------------|--------------|-------------------|
| teams        |              | team         | HasMany           |
| Results      | ARRAY        |              |                   |
| game_date    | DATE         |              |                   |
| game_act     |              | game_act     | HasOne            |
| game_referee |              | referee      | HasMany           |
| league       |              | leagues      | hasOne            |