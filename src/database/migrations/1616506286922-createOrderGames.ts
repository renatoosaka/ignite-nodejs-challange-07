import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrderGames1616506286922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'order_games',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'ordersId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'gamesId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'integer',
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
          }
        ],
        foreignKeys: [
          {
            name: 'order_games_order',
            columnNames: ['ordersId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          {
            name: 'order_games_game',
            columnNames: ['gamesId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'games',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }          
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('order_games')
    }

}
