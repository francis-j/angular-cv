using System;
using BE;
using DAL;
using Xunit;

namespace XUT
{
    public class FactoryTest
	{
		[Fact]
		public void InitializeFactory()
		{
			var factory = new PersonFactory();
		}

		[Fact]
		public void Add()
		{
            var factory = new PersonFactory();

			var id = 1;
			var person = new Person()
			{
				Id = id,
				FirstName = "Test",
				LastName = "Person",
				EmailAddress = "test@person.com",
				DateOfBirth = new DateTime(1991, 01, 01),
				Nationality = "British"
			};

            factory.Add(person);

			var p = factory.Get(id);

			Assert.Equal(person, p);
		}

		[Fact]
		public void Get()
		{
			var factory = new PersonFactory();

            if (factory.Get() == null)
                throw new Exception();
		}

		[Fact]
		public void Update()
        {
			var factory = new PersonFactory();

			var id = 1;
			var person = new Person()
			{
				Id = 1,
				FirstName = "Test",
				LastName = "Person",
				EmailAddress = "test@person.com",
				DateOfBirth = new DateTime(1991, 01, 01),
				Nationality = "French"
			};

            factory.Update(id, person);
		}

		[Fact]
		public void GetOne()
		{
			var factory = new PersonFactory();

			var id = 1;

			if (factory.Get(id) == null)
				throw new Exception();
		}

		[Fact]
		public void Delete()
		{
			var factory = new PersonFactory();

			var id = 1;

            factory.Delete(id);
		}
	}
}
