import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createGameGenres1616506716103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'game_genres',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'genresId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'gamesId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'game_genres_game',
            columnNames: ['gamesId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'games',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          {
            name: 'game_genres_genre',
            columnNames: ['genresId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'genres',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }            
        ]
      }))
    }   

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('game_genres')
    }

}
