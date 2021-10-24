import { Injectable } from '@angular/core';
import { Book } from "../interfaces/book.interface";

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Lord of the Rings',
      author: 'J. R. R. Tolkien',
      pages: 821,
      genre: ['fantasy'],
      picture: 'https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/lord_of_the_rings_fellowship_of_the_ring_2000x3000.jpg',
      description: '<p>&quot;An extraordinary work -- pure excitement.&quot; -- New York Times Book Review   One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them</p><p>In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.</p><p>From Sauron\'s fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings, but always he searched for the One Ring that would complete his dominion.</p><p>When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.</p><p>The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.</p>'
    },
    {
      id: 2,
      name: 'Eragon',
      author: 'Christopher Paolini',
      pages: 1400,
      genre: ['fantasy'],
      picture: 'https://images-na.ssl-images-amazon.com/images/I/91MLxKW-oGL.jpg',
      description:'<p>Don&rsquo;t miss the latest book from the author of Eragon: The Fork, the Witch, and the Worm: Tales from Alaga&euml;sia!</p>\n' +
        '\n' +
        '<p>Perfect for fans of Lord of the Rings, the New York Times best-selling Inheritance Cycle about the dragon rider Eragon has sold more than 35 million copies and is an international fantasy sensation.</p>\n' +
        '\n' +
        '<p>Fifteen-year-old Eragon believes he is merely a poor farm boy - until his destiny as a Dragon Rider is revealed. Gifted with only an ancient sword, a loyal dragon, and sage advice from an old storyteller, Eragon is soon swept into a dangerous tapestry of magic, glory, and power. Now, his choices could save - or destroy - the empire.</p>\n' +
        '\n' +
        '<p>&ldquo;An authentic work of great talent.&rdquo; (The New York Times Book Review)</p>'
    },
    {
      id: 3,
      name: 'Hobbit',
      isBestseller: true,
      author: 'J. R. R. Tolkien',
      pages: 300,
      genre:['fantasy'],
      picture: 'https://www.vokrug.tv/pic/product/f/0/4/d/f04d9b65a3d941da3c9fd5ab247d0c9d.jpeg',
      description: '<p>A great modern classic and the prelude to The Lord of the Rings.   Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.</p><p>&ldquo;A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible . . . All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.&rdquo; &ndash; New York Times Book Review</p>'
    },
    {
      id: 4,
      name: 'The Chronicles of Narnia',
      isBestseller: true,
      author: 'C. S. Lewis',
      pages: 912,
      genre:['fantasy', 'child book'],
      picture: 'https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_.jpg'
    },
    {
      id: 5,
      name: 'Matrix',
      author: 'Sisters Wachowski',
      pages: 1324,
      genre: ['fantastic', 'action', 'postapocalypse'],
      picture: 'https://pics.me.me/entering-the-matrix-69374486.png' },
  ];
  noPictureUrl = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book {
    return this.books.find(book => book.id === id);
  }
}
