using System;
using System.Collections.Generic;

public class Component
{
    Factory factory;

    public Component()
    {
        factory = new Factory();
    }

    public List<Page> GetPages()
    {
        return factory.GetPages();
    }
}