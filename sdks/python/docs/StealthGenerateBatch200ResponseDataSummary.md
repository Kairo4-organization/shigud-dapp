# StealthGenerateBatch200ResponseDataSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**succeeded** | **int** |  | [optional] 
**failed** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.stealth_generate_batch200_response_data_summary import StealthGenerateBatch200ResponseDataSummary

# TODO update the JSON string below
json = "{}"
# create an instance of StealthGenerateBatch200ResponseDataSummary from a JSON string
stealth_generate_batch200_response_data_summary_instance = StealthGenerateBatch200ResponseDataSummary.from_json(json)
# print the JSON string representation of the object
print(StealthGenerateBatch200ResponseDataSummary.to_json())

# convert the object into a dict
stealth_generate_batch200_response_data_summary_dict = stealth_generate_batch200_response_data_summary_instance.to_dict()
# create an instance of StealthGenerateBatch200ResponseDataSummary from a dict
stealth_generate_batch200_response_data_summary_from_dict = StealthGenerateBatch200ResponseDataSummary.from_dict(stealth_generate_batch200_response_data_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


