using System;
using System.Collections.Generic;

namespace BE
{
    public class Site : GTObject
    {
        public IEnumerable<Page> Pages { get; set; }
    }
}