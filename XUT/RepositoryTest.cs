using System;
using BE;
using DAL;
using Xunit;

namespace XUT
{
    public class RepositoryTest
    {
        [Fact]
        public void InitializeRepository()
        {
            var repository = new PersonRepository();
        }

        [Fact]
        public void Add()
        {
			var repository = new PersonRepository();
            var person = new Person()
            {
                Id = 1,
                FirstName = "Test",
                LastName = "Person",
                EmailAddress = "test@person.com",
                DateOfBirth = new DateTime(1991, 01, 01),
                Nationality = "British"
            };

            repository.Add(person);
		}

		[Fact]
		public async void GetAll()
		{
			var repository = new PersonRepository();

            await repository.Get();
		}

		[Fact]
		public void Update()
		{
			var repository = new PersonRepository();
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

            repository.Update(id, person);
		}

		[Fact]
		public async void Get()
		{
			var repository = new PersonRepository();
			var id = 1;

			await repository.Get(id);
		}

        [Fact]
        public void Delete()
        {
            var repository = new PersonRepository();
            var id = 1;

            repository.Delete(id);
        }
    }
}
