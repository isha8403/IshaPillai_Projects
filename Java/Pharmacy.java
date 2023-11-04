import java.awt.*;
import java.awt.event.*;
import java.awt.Color;

class Pharmacy extends Frame implements ActionListener 
{
    Label l1,l2,l3,l4,l5,l6,l7,l8,l9;
    TextField t1,t2,t3,t4,t5,t6;
    Button b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11;
    int total;

public Pharmacy()
{
   // setLayout(new FlowLayout());
    setLayout(null);
    //Customerinfo
    l1=new Label("Customer Name : ");
    t1=new TextField(10);
    l1.setBounds(10, 30, 100, 20);
    t1.setBounds(150, 30, 150, 20);

    l2=new Label("Customer ID: ");
    t2=new TextField(10);
    l2.setBounds(10, 60, 100, 20);
    t2.setBounds(150, 60, 150, 20);
   
    l3=new Label("Mobile No. : ");
    t3=new TextField(10);
    l3.setBounds(10, 90, 100, 20);
    t3.setBounds(150, 90, 150, 20);

    l4=new Label("Age : ");
    t4=new TextField(10);
    l4.setBounds(10, 120, 100, 20);
    t4.setBounds(150, 120, 150, 20);

    b1=new Button("Submit");
    b1.setBounds(15, 150, 100, 20);
    b1.setBackground(Color.CYAN);

    l5=new Label("MEDICINE LIST");
    l5.setBounds(50, 180, 100, 20);

    b2=new Button("Paracetamol");
    b2.setBounds(20,210,120,20);

    b3=new Button("Neurobion Rs.100");
    b3.setBounds(150,210,120,20);

    b4=new Button("Acetamol Rs.80");
    b4.setBounds(280,210,120,20);

    b5=new Button("Brufen Rs.27.41");
    b5.setBounds(20,240,120,20);

    b6=new Button("Benadryl Rs.120.21");
    b6.setBounds(150,240,120,20);

    b7=new Button("Glykind M Rs.80");
    b7.setBounds(280,240,120,20);

    b8=new Button("Glykind M Rs.80");
    b8.setBounds(20,270,120,20);

    b9=new Button("Glykind M Rs.80");
    b9.setBounds(150,270,120,20);

    b10=new Button("Glykind M Rs.80");
    b10.setBounds(280,270,120,20);

    l6=new Label("Rate");
    t5=new TextField(10);
    l6.setBounds(50,310,60,20);
    t5.setBounds(150,310,120,20);

    l7=new Label("Quantity");
    t6=new TextField(10);
    l7.setBounds(50,340,60,20);
    t6.setBounds(150,340,120,20);

    b11=new Button("Calculate");
    b11.setBounds(30,370,120,20);

    l8=new Label("Total Amount");
    l8.setBounds(50,410,120,20);

    l9=new Label("     ");
    l9.setBounds(250,410,120,20);
    total=0;
     
    //Adding Buttons
    add(l1);
    add(t1);

    add(l2);
    add(t2);

    add(l3);
    add(t3);

    add(l4); 
    add(t4);

    add(b1);

    add(l5);

    add(b2);
    add(b3);
    add(b4);
    add(b5);
    add(b6);
    add(b7);
    add(b8);
    add(b9);
    add(b10);

    add(l6);
    add(t5);
    
    add(l7);
    add(t6);

    add(b11);
    add(l8);
    add(l9);

    b1.addActionListener(this);
    b2.addActionListener(this);
    addWindowListener(new MyWindowAdapter());
}

public void ActionPerformed(ActionEvent ae)
{
    int qty;
    qty=Integer.parseInt(t6.getText());
    if(ae.getSource()==b2)
    {
        total = 50 * qty;
        l9.setText(" "+total);
    }
    
}

public static void main(String args[])
{
    Pharmacy p = new Pharmacy();
    p.setSize(500,500);
    p.setVisible(true);
}

class MyWindowAdapter extends WindowAdapter
{
    public void WindowClosing(WindowEvent we)
    {
        System.exit(0);
    }
}

@Override
public void actionPerformed(ActionEvent e) {
    throw new UnsupportedOperationException("Unimplemented method 'actionPerformed'");
}
}