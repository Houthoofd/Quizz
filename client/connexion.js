const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',     // Hôte de la base de données
  user: 'root',     // Nom d'utilisateur
  password: '',    // Mot de passe
  database: 'DB_quizz_app'  // Nom de la base de données
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');

  const query = "SELECT * FROM questions";
  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return;
    }
    // Traiement du query //
    console.log(rows);
    // Fermeture de la connexion
    connection.end((err) => {
      if (err) {
        console.error('Erreur lors de la fermeture de la connexion :', err);
        return;
      }
      console.log('Connexion fermée');
    });
  });
});
