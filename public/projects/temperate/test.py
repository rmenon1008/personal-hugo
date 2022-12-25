# YOUR FIXED FUNCTION HERE
# Make sure you comment on your fixes

def subset_diabetes_by_age_fixed(diabetes_data):
    
    # NOTE FROM YOUR FRIEND WHO WORKS AT UW IHME
    """ The function takes diabetes pandas data frame as an input and outputs a subplot of 3 x 1 with three histograms.    
    
        Specifically, I want to divide the diabetes data into three age groups - 
            1. 20 to 40
            2. 40 to 60
            3. 60 to 80
            
        and plot 3 histograms of glucose distribution (50 bins per histogram) in 3 x 1 python subplots.
        
        I seem to be getting error from very beginning even before I divide the dataset....
        My coworkers at IHME prefer R rather than Python... so you are my only hope!  
    
    """

    # diabetes_data = diabetes_data.to_numpy()
    
    # Extract the age column of the diabetes_data 
    # age_column = diabetes_data[:, 8] 
    age_column= diabetes_data.iloc[:,3]
    
    # Construct boolean mask for each age group 
    age_20_40_bool_mask = age_column > 20 + age_column < 40
    age_40_60_bool_mask = age_column > 40 + age_column < 60
    age_60_80_bool_mask = age_column > 60 + age_column < 80
    
    # Get glucose data for each age group via applying the boolean mask for each age group
    age_20_40_glucose = diabetes_data[age_20_40_bool_mask, 2]
    age_40_60_glucose = diabetes_data[age_40_60_bool_mask, 2]
    age_60_80_glucose = diabetes_data[age_60_80_bool_mask, 2]
    
    # Plot the histogram for each age group in 3 x 1 subplot
    fig = plt.figure(figsize=(15,7))
    
    plt.subplot(3,1,1)
    
    plt.hist(age_20_40_glucose, bins = 50)
    plt.title('Age 20 to 40', fontsize = 15)
    
    plt.subplot(3,1,2)
    
    plt.hist(age_40_60_glucose, bins = 50)
    plt.title('Age 40 to 60', fontsize = 15)
    
    plt.subplot(3,1,3)
    
    plt.hist(age_60_80_glucose, bins = 50)
    plt.title('Age 60 to 80', fontsize = 15)
    
    plt.tight_layout()
    
    plt.show()