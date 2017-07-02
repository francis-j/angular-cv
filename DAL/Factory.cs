using System;
using System.Collections.Generic;

public class Factory
{
    public Factory() 
    {

    }

    public List<Page> GetPages()
    {
        return new List<Page>()
        {
            new Page()
            {
                Title = "Employment History",
                UrlTag = "employment"
            },
            new Page()
            {
                Title = "Education",
                UrlTag = "education"
            },
            new Page()
            {
                Title = "Hobbies",
                UrlTag = "hobbies"
            },
            new Page()
            {
                Title = "Contact",
                UrlTag = "contact"
            }
        };
    }
}