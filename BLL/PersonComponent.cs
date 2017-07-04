using System;
using System.Collections.Generic;

public class Component
{
    PersonFactory factory;

    public Component()
    {
        factory = new PersonFactory();
    }

    public List<Page> GetPages()
    {
        return factory.GetPages();
    }
}