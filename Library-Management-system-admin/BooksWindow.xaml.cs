using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Library_Management_system_admin
{
    /// <summary>
    /// Interaction logic for BooksWindow.xaml
    /// </summary>
    public partial class BooksWindow : Window
    {
        private BookDbContext _db = new BookDbContext();

        public BooksWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
          BooksGrid.ItemsSource = _db.Books.ToList();
        }

        private void LogOutButton_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();

        }

        private void BackButton_Click(object sender, RoutedEventArgs e)
        {
            Dashboad dashboad = new Dashboad();
            dashboad.Show();
            this.Close();

        }

        private void AddBooks_button(object sender, RoutedEventArgs e)
        {
            Book book = new Book();
            AddBookWindow addBookWindow = new AddBookWindow(book);
            if (addBookWindow.ShowDialog() == true) 
            { 
                _db.Books.Add(book);
                _db.SaveChanges();
                LoadData();
            }
          
        }

        private void UpdateBookButton_Click(object sender, RoutedEventArgs e)
        {
            if (BooksGrid.SelectedItem is Book p)
            {
                Book book = new Book();
                book.BookId = p.BookId;
                book.BookName = p.BookName;
                book.Author = p.Author;
                book.Category = p.Category;

                AddBookWindow addBookWindow = new AddBookWindow(book);
                if(addBookWindow.ShowDialog() == true)
                {
                    p.BookName = book.BookName;
                    p.Author = book.Author;
                    p.Category = book.Category;
                    _db.Books.Update(p);
                    LoadData();
                    _db.SaveChanges();
                    LoadData();
                }
            }

        }

        private void DeleteBook_Button(object sender, RoutedEventArgs e)
        {
            if (BooksGrid.SelectedItem is Book p)
            {
                _db.Books.Remove(p);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
