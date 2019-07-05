/*
-- -----------------------------------------------------
-- create Table `customer`
-- -----------------------------------------------------*/
CREATE TABLE `customer` (
  `customer_id` INT NOT NULL,
  `customer_name` VARCHAR(45) NULL,
  PRIMARY KEY (`customer_id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*-- -----------------------------------------------------
-- create Table `orders`
-- -----------------------------------------------------*/
CREATE TABLE `orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `order_date` INT NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `customer_id_idx` (`customer_id` ASC),
  CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `homework_week2_db`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*-- -----------------------------------------------------
-- Create table `items`
-- -----------------------------------------------------*/
CREATE TABLE `items` (
  `item_id` INT NOT NULL,
  `item_name` VARCHAR(45) NOT NULL,
  `item_description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`item_id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*-- -----------------------------------------------------
-- Create  table `items_orders`
-- -----------------------------------------------------*/
CREATE TABLE `items_orders` (
  `order_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  INDEX `order_id_idx` (`order_id` ASC),
  INDEX `item_id_idx` (`item_id` ASC),
  CONSTRAINT `order_id`
    FOREIGN KEY (`order_id`)
    REFERENCES `homework_week2_db`.`orders` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `item_id`
    FOREIGN KEY (`item_id`)
    REFERENCES `homework_week2_db`.`items` (`item_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*INSERT INTO CUSTOMER */
insert into customer (customer_id, customer_name) values (1, 'Hema');
insert into customer (customer_id, customer_name) values (2, 'Moksha');
insert into customer (customer_id, customer_name) values (3, 'Rishi');
SELECT * FROM CUSTOMER;

/*INSERT INTO ORDERS */
insert into orders (order_id, order_date, amount) values (1, 2-5-19, 1000);
insert into orders (order_id, order_date, amount) values (2, 3-5-19, 2000);
insert into orders (order_id, order_date, amount) values (3, 4-5-19, 3000);
insert into orders (order_id, order_date, amount) values (4, 5-5-19, 4000);

/*READ */
SELECT * FROM ORDERS;

/* UPDATE  */
UPDATE
`customer`
SET
`customer_name` = 'Sunil'
WHERE
`customer_id` = 1;

/* DELETE */
DELETE FROM
`orders`
WHERE
`order_id` = 2;
