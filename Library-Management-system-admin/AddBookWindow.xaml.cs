using System;
using System.Collections.Generic;
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
    /// Interaction logic for AddBookWindow.xaml
    /// </summary>
    public partial class AddBookWindow : Window
    {
        public Book Book { get; set; }
        public AddBookWindow(Book book)
        {
            InitializeComponent();
            Book = book;

            BookIDTextBox.Text = book.BookId.ToString();
            BookNameTextBox.Text = book.BookName;
            BookAuthorTextBox.Text = book.Author;
            BookCatergoryTextBox.Text = book.Category;

        }

        private void BookSave_button(object sender, RoutedEventArgs e)
        {
            try
            {
                Book.BookId = int.Parse(BookIDTextBox.Text);
                Book.BookName = BookNameTextBox.Text;
                Book.Author = BookAuthorTextBox.Text;
                Book.Category = BookCatergoryTextBox.Text;
                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Error in Input");
                DialogResult = false;
                Close();

            }

        }

        private void BookCancel_Button(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
            Close();

        }
    }
}
