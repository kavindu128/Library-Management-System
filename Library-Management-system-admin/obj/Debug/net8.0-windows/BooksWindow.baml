   M S B A M L   `   `   `  ����Z  VLibrary-Management-system-admin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullQ-clr-namespace:Library_Management_system_adminLibrary_Management_system_admin  5   	   1    +Library_Management_system_admin.BooksWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ?local-clr-namespace:Library_Management_system_admin     5   	     � Title$  BooksWindow��5   	   $	��450��6   $	��800��6*   .��5	      �  � RowDefinitions 5
   
   �� 5      $	��53* �6   �� 5      $
��333* �6   �� 5      $	��48* �6    � ColumnDefinitions 5   
   �� 5      $��6* �6   �� 5      $	��19* �6   .+�5   
   �� ���#800080 J� Opacity$	 1.0Q�5      $��0��5      $��3��5      �� 5   
   ���#800080$	 0.7Q�5      $��1��5      $��0��5      �� 5!   
   $��BOOKS MANAGEMENT��6   
���   �$��25(�5#      $��Center=�5$      $
��Bold"�5%      $��43��5&      $��Center=�5'      $	��436��5(      $��1��5)      �� 5+   
   ���#800080$	 0.7Q�5,      $��1��5-      $��1��5.      $��	0,333,0,0q�6!   $��2��64   �� 50   
   -   5        $��Logout��50      $��	26,7,34,6q�51      ���#4CAF50$��2��54      �� 55   
   -   5        $
��Back��55      $��10,10,131,10q�56      ���#4CAF5058      �� 5:   
   -   5        $	��Add��5:      
����i��$��1��5<      $��11,10,10,270q�5=      $
��auto��5>      $��25(�5?      $
��Bold"�5@      
���   �$��0��5B      5C      �� 5F   
   -   5        $��Update��5F      $��12,68,10,209q�5G      
����i��$
��auto��5I      $��1��5J      $	��170��5K      $��25(�5L      $
��Bold"�5M      
���   �$��0��5O      5P      �� 5R   
   -   5        $��Delete��5R      $��12,132,10,146q�5S      
����i��$��1��5U      $	��170��5V      $��25(�5W      $
��Bold"�5X      
���   �$��0��5Z      $
��auto��5[      5]      &   System.Windows.Controls.DataGrid  5_   
   -   5          Name$ 	BooksGrid��5`      
�������   AutoGenerateColumns$
 True��5a      $��1��5b      $��1��6   $��Stretch=�5c      $��Stretch=�5d      5h      5i      