export default function BookList() {
   let pageTitle = "New Book Releases!";
   let book1 = "https://www.booklistqueen.com/wp-content/uploads/such-charming-liars-karen-m-mcmanus-200x300.jpg";
   let book2 = "http://bookshelfthomasville.com/cdn/shop/files/medea.jpg?v=1705687761";
   let book3 = "https://m.media-amazon.com/images/I/91R34ScmjlL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Such Charming Liars" />
         <img src={book2} alt="Medea" />
         <img src={book3} alt="Everyone Who Can Forgive Me is Dead" />
      </div>      
   );
}