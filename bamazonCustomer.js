var mysql = require("mysql");
var inquirer = require("inquirer");

var userItem;
var userAmt;
var itemAmt;
var endAmt;

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Grocero8",
    database: "bamazon_DB"
});

console.log("Loading inventory.\n");
connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
        console.log(
            "\nITEM ID:  #" + res[i].item_id +
            "\nPRODUCT:  "  + res[i].product_name +
            "\nCATEGORY: "  + res[i].department_name +
            "\nPRICE:    $" + res[i].price);
    }

    inquirer
        .prompt([{
            name: "userChoice",
            message: "What item do you want? Enter by ID.",
        }, {
            name: "amount",
            message: "How many do you want?"
        }]).then(function (answer) {
            userItem = parseInt(answer.userChoice);
            console.log(userItem);
            userAmt = parseInt(answer.amount);
            itemAmt = res[(userItem-1)].stock_quantity;
            endAmt = itemAmt - userAmt;
            console.log(endAmt);

            if ( res[(userItem-1)].stock_quantity < userAmt ) {
                console.log("Not enough items in stock.");
                connection.end();
            }else{
                console.log("You just bought a " + res[(userItem-1)].product_name);
                updateAmt();
            }

        });
    });

function updateAmt() {

    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: endAmt
          },
          {
            item_id: userItem
          }
        ],
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " products updated!\n");
          connection.end();
        }
      );
}
