var score = 0;

Golden_goblin_coin.detectCollisionsWith([Robot], function (collidedObject) {
    score += 100;
    Text2D.setText("Score = " + score);
    Text2D.setColor("red");
    Golden_goblin_coin.setVisible(false);
});
