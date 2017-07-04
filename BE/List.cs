using System;
using System.Collections.Generic;
using BE;

namespace BE
{
    public class List : CVObject
    {
        public IEnumerable<String> Items { get; set; }
        public int SectionId { get; set; }
    }
}
