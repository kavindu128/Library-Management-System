   M S B A M L   `   `   `  ����Z  VLibrary-Management-system-admin, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullQ-clr-namespace:Library_Management_system_adminLibrary_Management_system_admin  5   	   3    -Library_Management_system_admin.AddBookWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ?local-clr-namespace:Library_Management_system_admin     5   	     � Title$  AddBookWindow��5   	   $	��450��6   $	��700��6,   .��5      � 
���� ��$��0,0,0,-6q�6    � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��2* �6   �� 5      $��3* �6   .+�5   
   �� $��BOOK ID��6    �� Padding$ 6q�5      $��20(�6   $��1��5      $��0��6   
����i��$
��auto��5       $
��Bold"�5!      
���   � �� TextAlignment$ Center=�5#      $��62,12,29,20q�6$   �� 5%   
   -   5         ��Name$ BookIDTextBox��5)      $��5q�5%      
�������$��1��5'      $��1��5(       �� TextAlignment$ Center=�5*      $��10,12,29,15q�6%   �� 5,   
   $��	BOOK NAME��6   $ 6q�5-      $��20(�6   $��2��5.      $��0��6   
����i��$
��auto��50      $
��Bold"�51      
���   �$ Center=�53      $��62,12,29,23q�6$   �� 55   
   -   5        $ BookNameTextBox��59      $��5q�55      
�������$��2��57      $��1��58      $ Center=�5:      $��10,12,29,15q�6$   �� 5=   
   $��AUTHOR��6   $ 6q�5>      $��20(�6   $��3��5?      $��0��6   
����i��$
��auto��5A      $
��Bold"�5B      
���   �$ Center=�5D      $��62,12,29,23q�6$   �� 5F   
   -   5        $ BookAuthorTextBox��5J      $��5q�5F      
�������$��3��5H      $��1��5I      $ Center=�5K      $��10,10,29,16q�6$   �� 5N   
   $��	CATERGORY��6   $ 6q�5O      $��20(�6   $��4��5P      $��0��6   
����i��$
��auto��5R      $
��Bold"�5S      
���   �$ Center=�5U      $��62,12,29,24q�6$   �� 5W   
   -   5        $ BookCatergoryTextBox��5[      $��5q�5W      
�������$��4��5Y      $��1��5Z      $ Center=�5\      $��10,12,29,15q�6$   �� 5^   
   -   5        $
��Save��5^      ���#4CAF50$��5��5`      $��1��5a      $
��auto��5b      $��25(�5c      $
��Bold"�5d      
���   �$��199,16,81,15q�5e   "   5f      �� 5g   
   -   5        $��Cancel��5g      ���#4CAF50$��5��5i      $
��auto��5k      $��25(�5l      $
��Bold"�5m      
���   �$��0��5o      $��62,16,55,15q�6   5p      5v      5w      